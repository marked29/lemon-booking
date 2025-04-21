import { useState } from 'react';

const INITIAL_FORM_STATE = {
  guests: '',
  eventType: '',
  time: '',
};

type ReplaceAll<T, NewType> = {
  [K in keyof T]: NewType;
};

type FormData = typeof INITIAL_FORM_STATE;
type FormError = Partial<ReplaceAll<FormData, string>>;

const validateForm = (data: FormData): FormError => {
  const errors: FormError = {};
  if (!data.guests || +data.guests < 1) {
    errors.guests = 'Укажите количество гостей';
  }
  if (!data.eventType) {
    errors.eventType = 'Выберите тип события';
  }
  if (!data.time) {
    errors.time = 'Укажите время';
  }
  return errors;
};

const ErrorMessage = ({ id, message }: { id: string; message?: string }) => {
  return message ? (
    <p id={id} className="text-sm text-red-500 mt-1">
      {message}
    </p>
  ) : null;
};

export default function ReservationForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({} as FormError);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => (prev[name as keyof FormData] === value ? prev : { ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      console.log('Забронировано:', formData);
      alert('Бронирование отправлено 🎉');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4 mt-10">
      <h2 className="text-2xl font-bold text-center">Бронирование столика</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Количество гостей</label>
        <input
          type="number"
          name="guests"
          value={formData.guests || ''}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          min="1"
          aria-describedby="guests-error"
        />
        <ErrorMessage id="guests-error" message={errors.guests} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Тип события</label>
        <select
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          aria-describedby="eventType-error"
        >
          <option value="">-- Выберите --</option>
          <option value="birthday">День рождения</option>
          <option value="party">Вечеринка</option>
          <option value="business">Деловая встреча</option>
        </select>
        <ErrorMessage id="eventType-error" message={errors.eventType} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Время</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          aria-describedby="time-error"
        />
        <ErrorMessage id="time-error" message={errors.time} />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Отправка...' : 'Забронировать'}
      </button>
    </form>
  );
}
