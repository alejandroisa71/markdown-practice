import Image from "next/image"

const MyImage = ({url}) => {
console.log(url);
  return (
  <Image src={url} width={300} height={300} alt="Michi" className="mt-6"/>
  )
}
export default MyImage