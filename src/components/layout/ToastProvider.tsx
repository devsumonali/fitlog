'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
     return <Toaster position="top-center" toastOptions={{ style: { background: '#1a1d24', color: '#ffffff', border: '1px solid #2d313b' } }} />;
}
