
import LoginButton from '../components/login/loginButton';
const HomeLogin = () => {

  
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.pinimg.com/736x/64/d5/96/64d59633a8af5109ab5a1122c262212c.jpg" className="max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">¡Organiza tus proyectos!</h1>
            <p className="py-6">La organización de proyectos te ayuda a reducir el estrés, tener más flexibilidad, espacio para la creatividad y menos riesgo de agotamiento</p>
            <LoginButton/>
          </div>
        </div>
      </div> 
    );
};

export default HomeLogin