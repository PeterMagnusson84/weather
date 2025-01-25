import { ICityNotFound } from "../interfaces/ICityNotFound";

const CityNotFound = (props: ICityNotFound) => {

  return (
    <div>
      <h1>{`Staden ${props.city} du sökt på finns inte`}</h1>
    </div>
  )
}

export default CityNotFound