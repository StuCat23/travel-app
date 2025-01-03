
const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    <div classNmae={`${bg} p-6 rounded-lg shadow-md`}>
        { children }
    </div>
  )
}

export default Card