import {Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">¿Qué esperas?</h1>
                    <p className="py-6">Ponte al día con los deberes</p>
                    <Link to="/homeproyectos" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};
    
export default Home

    