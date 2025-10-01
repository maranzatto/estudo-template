/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#42b883',
                    600: '#35a372',
                    700: '#2d8a5f',
                    800: '#26704d',
                    900: '#1f5a3e',
                },
                secondary: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#35495e',
                    600: '#2c3e50',
                    700: '#243342',
                    800: '#1d2833',
                    900: '#161e27',
                },
                accent: {
                    purple: '#667eea',
                    pink: '#764ba2',
                    blue: '#2196f3',
                    green: '#4caf50',
                    orange: '#ff9800',
                    red: '#f44336',
                },
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                },
            },
            fontFamily: {
                sans: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
                mono: ['Fira Code', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
            },
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
                sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
                base: ['1rem', { lineHeight: '1.5rem' }], // 16px
                lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
                xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
                '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
                '5xl': ['3rem', { lineHeight: '1' }], // 48px
                '6xl': ['3.75rem', { lineHeight: '1' }], // 60px
            },
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            boxShadow: {
                soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                glow: '0 0 20px rgba(66, 184, 131, 0.3)',
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
                'scale-in': 'scaleIn 0.2s ease-out',
                'spin-slow': 'spin 3s linear infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            container: {
                center: true,
                padding: '2rem',
            },
        },
    },
    plugins: [typography, forms],
}
