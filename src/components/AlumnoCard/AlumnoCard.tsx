import './AlumnoCard.css';

interface AlumnoCardProps {
nombre: string;
carrera: string;
estado: string;
}

const AlumnoCard = ({ nombre, carrera, estado }: AlumnoCardProps) => {
// Lógica simple para cambiar el color del badge según el estado

const matriculado = estado === 'Matriculado';
const badgeColor = matriculado ? 'bg-success' : 'bg-secondary';

// Iniciales del alumno para el avatar (ej. "Daniel Puccio" -> "DP")
const iniciales = nombre.split(' ').map((parte) => parte[0]).slice(0, 2).join('').toUpperCase();

return (
<div className="col-md-4 mb-4">
<div className={`card alumno-card shadow-sm h-100 ${matriculado ? '' : 'inactivo'}`}>
<div className="card-body">
<div className="d-flex align-items-center">
<div className="alumno-avatar">{iniciales}</div>
<div>
<h5 className="card-title">{nombre}</h5>
<h6 className="card-subtitle text-muted">{carrera}</h6>
</div>
</div>
<hr />

<div className="d-flex justify-content-between align-items-center">

<span className={`badge rounded-pill ${badgeColor}`}>{estado}</span>
<div>

<button className="btn btn-sm btn-outline-warning me-2">Editar</button>

<button className="btn btn-sm btn-outline-danger">Eliminar</button>

</div>
</div>
</div>
</div>
</div>
);
};
export default AlumnoCard;
