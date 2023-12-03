import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import RandM_service from '../../services/RandM_service';


export const Detail = () => {

    const [mascota, setMascota] = useState({});
    const {id} = useParams();
    const {pathname} = useLocation();

    useEffect(() => {
      console.log(pathname);
        RandM_service.getCharacterById(id)
            .then((data) => setMascota(data))
    }, [id])
    

  return (
    <div className="row m-3">
        <div className="col-mb-12">
            <div className="card flex-md-row box-shadow h-md-250">
                <div className="card-body d-flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-success">
                        {mascota.species}
                    </strong>
                        <h3 className="mb-0 text-dark">{mascota.name}</h3>
                        <div className="mb-1 text-muted">
                            {new Date(mascota.created).toLocaleDateString()}
                        </div>
                        <div className="mb-1 text-muted"></div>
                    <ul className="list-group mt-1">
                        <li className="list-group-item">Nombre</li>
                        <li className="list-group-item">Genero</li>
                        <li className="list-group-item">Edad</li>
                        <li className="list-group-item">Gustos</li>
                    </ul>

                    <Link to={'/'} className="mt-3 btn btn-primary btn-lg">
                        Volver
                    </Link>
                </div>
            <img
            className="h-100 d-inline-block rounded card-img-rigth flex-auto d-none d-md-block m-4"
            height="auto"
            src={mascota.image} 
            alt="image"
            />
            </div>
        </div>
    </div>
  )
}
