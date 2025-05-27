function Home() {
    return (
    <>
        <div
        className="text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{
            backgroundColor: '#004080',
            color: 'white',
            minHeight: '60vh',
            padding: '5rem'
        }}
        >
        <h1 className="display-3 fw-bold">¡Bienvenido a la Sodería!</h1>
        <p className="lead">Agua con gas natural, frescura garantizada</p>
        </div>

        <div className="container mt-5">
        <div className="row text-center">
            <div className="col-md-4">
            <i className="bi bi-house-heart display-4 text-primary"></i>
            <h4 className="mt-3">¿Quiénes somos?</h4>
            <p>Somos una sodería familiar con más de 20 años en el rubro, dedicada a la distribución de soda y agua gasificada a hogares, comercios y empresas en la región.</p>
            </div>
            <div className="col-md-4">
            <i className="bi bi-gift display-4 text-success"></i>
            <h4 className="mt-3">Beneficios para el cliente</h4>
            <p>Entrega puntual a domicilio, atención personalizada, promociones exclusivas y productos de calidad certificados para garantizar la mejor experiencia.</p>
            </div>
            <div className="col-md-4">
            <i className="bi bi-globe-americas display-4 text-danger"></i>
            <h4 className="mt-3">Filosofía y valores</h4>
            <p>Trabajamos con compromiso, honestidad y respeto por el medio ambiente. Reciclamos nuestros envases y fomentamos un consumo responsable.</p>
            </div>
        </div>
        </div>

        <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>Sodería App © 2025 - UTN Programación III</p>
        </footer>
    </>
    );
}

export default Home;