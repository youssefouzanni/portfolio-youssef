import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


createRoot(document.getElementById('root')).render(
        <App />
)


serviceWorkerRegistration.register();