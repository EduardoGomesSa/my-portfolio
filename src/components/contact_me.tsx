// components/ContactMe.tsx
"use client"; // Certifique-se de que o código será renderizado no cliente

import { useState } from 'react';

export function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica para enviar a mensagem por e-mail
        // Exemplo usando EmailJS ou algum serviço similar
        alert('Mensagem enviada com sucesso!');
    };

    return (
        <div className="w-full h-full flex justify-center items-center">
            {/* Container principal */}
            <div className="w-[90vw] bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mx-auto mt-10 flex">
                
                {/* Parte esquerda - Imagem */}
                <div className="w-1/2 h-full bg-cover bg-center rounded-lg">
                    <img src="/assets/nerd.png" alt="Imagem ilustrativa do sobre" />
                </div>

                {/* Parte direita - Formulário */}
                <div className="w-1/2 flex flex-col justify-center pl-8">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nome</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Mensagem</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                rows={4}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#8A42DB] text-white py-2 px-4 rounded hover:bg-blue-700"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
