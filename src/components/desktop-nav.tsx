export default function DesktopNav() {
  return (
    <nav>
      <ul className="flex gap-8">
        <button className="pt-1.5 pb-1.5 pl-5 pr-5 rounded-full border font-medium hover:bg-custom-purple hover:border-custom-purple transition-colors text-sm cursor-pointer">Inicio</button>  
        <button className="pt-1.5 pb-1.5 pl-5 pr-5 rounded-full border font-medium hover:bg-custom-purple hover:border-custom-purple transition-colors text-sm cursor-pointer">Manifesto</button> 
        <button className="pt-1.5 pb-1.5 pl-5 pr-5 rounded-full border font-medium hover:bg-custom-purple hover:border-custom-purple transition-colors text-sm cursor-pointer">Modelo C 2.0</button> 
        <button className="pt-1.5 pb-1.5 pl-5 pr-5 rounded-full border font-medium hover:bg-custom-purple hover:border-custom-purple transition-colors text-sm cursor-pointer ">Realizadores</button> 
      </ul> 
    </nav>
  )
}
