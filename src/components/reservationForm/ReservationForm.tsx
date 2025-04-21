import { useState } from 'react';

const INITIAL_FORM_STATE = {
  guests: 0,
  eventType: '',
  time: '',
};

type ReplaceAll<T, NewType> = {
  [K in keyof T]: NewType;
};

type FormData = typeof INITIAL_FORM_STATE;
type FormError = Partial<ReplaceAll<FormData, string>>;

export default function ReservationForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const [errors, setErrors] = useState({} as FormError);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: FormError = {};
    if (!formData.guests || formData.guests < 1) {
      newErrors.guests = 'Укажите количество гостей';
    }
    if (!formData.eventType) {
      newErrors.eventType = 'Выберите тип события';
    }
    if (!formData.time) {
      newErrors.time = 'Укажите время';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Забронировано:', formData);
    alert('Бронирование отправлено 🎉');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4 mt-10">
      <h2 className="text-2xl font-bold text-center">Бронирование столика</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Количество гостей</label>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          min="1"
        />
        {errors.guests && <p className="text-sm text-red-500 mt-1">{errors.guests}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Тип события</label>
        <select
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        >
          <option value="">-- Выберите --</option>
          <option value="birthday">День рождения</option>
          <option value="party">Вечеринка</option>
          <option value="business">Деловая встреча</option>
        </select>
        {errors.eventType && <p className="text-sm text-red-500 mt-1">{errors.eventType}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Время</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        {errors.time && <p className="text-sm text-red-500 mt-1">{errors.time}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
        Забронировать
      </button>
    </form>
  );
}
