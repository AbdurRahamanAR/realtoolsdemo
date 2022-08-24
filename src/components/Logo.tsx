import clsx from 'clsx'
import Icon from './Icon'

enum LogoType {
  primary = "primary",
  secondary = "secondary"
}

export default function Logo({type}: {type: keyof typeof LogoType}) {
  return (
    <span className='inline-flex items-center'>
      <Icon 
        className={type === LogoType.secondary ? "text-secondary" : 'text-primary'} 
        icon='storage_container' 
        height={27.5} 
        width={30} 
      /> 
      <strong 
        className={clsx(["font-inter font-semibold text-xl ml-[7px]", type === LogoType.secondary ? "text-white" : "text-[#212121]"])}
      >StorageConnect</strong>
    </span>
  )
}
