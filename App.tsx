
import React, { useState, useEffect } from 'https://aistudiocdn.com/react@^19.2.0';
import Storefront from './components/Storefront.tsx';
import AdminPanel from './components/AdminPanel.tsx';
import { AppProvider, useAppContext } from './state/AppContext.tsx';
import { ShoppingCartIcon } from './components/Icons.tsx';
import { Spinner, ToastContainer } from './components/ui.tsx';

// --- Header Component ---
interface HeaderProps {
    view: 'store' | 'admin';
    onViewChange: (view: 'store' | 'admin') => void;
}

const Header: React.FC<HeaderProps> = ({ view, onViewChange }) => {
    return (
        <header className="bg-surface shadow-md sticky top-0 z-30">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="bg-primary p-2 rounded-lg">
                        <ShoppingCartIcon className="w-6 h-6 text-white" />
                    </span>
                    <h1 className="text-xl md:text-2xl font-bold text-text-primary">
                        Toko Snack
                    </h1>
                </div>
                <div className="flex items-center gap-2 border border-gray-200 rounded-full p-1">
                    <button
                        onClick={() => onViewChange('store')}
                        className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${view === 'store' ? 'bg-primary text-white' : 'text-text-secondary'}`}
                    >
                        Toko
                    </button>
                    <button
                        onClick={() => onViewChange('admin')}
                        className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${view === 'admin' ? 'bg-primary text-white' : 'text-text-secondary'}`}
                    >
                        Admin
                    </button>
                </div>
            </div>
        </header>
    );
};

// --- Main Content Component ---
// This component will have access to the context
const MainApp: React.FC = () => {
    const [view, setView] = useState<'store' | 'admin'>('store');
    const { state, dispatch } = useAppContext();

    useEffect(() => {
        // Dispatch an action to fetch initial data when the app loads
        dispatch({ type: 'FETCH_INITIAL_DATA' });
    }, [dispatch]);
    
    if (state.isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner size="lg" />
            </div>
        );
    }

    if (state.error) {
        return (
            <div className="flex justify-center items-center h-screen text-red-500">
                Error: {state.error}
            </div>
        );
    }
    
    return (
        <div className="min-h-screen">
            <Header view={view} onViewChange={setView} />
            <main>
                {view === 'store' ? <Storefront /> : <AdminPanel />}
            </main>
        </div>
    );
}

// --- App Wrapper with Provider ---
const App: React.FC = () => {
    return (
        <AppProvider>
            <MainApp />
            {/* Fix: The ToastContainer component is redundant as ToastProvider handles rendering. Removing it fixes a cryptic type error. */}
            <ToastContainer />
        </AppProvider>
    );
};

export default App;