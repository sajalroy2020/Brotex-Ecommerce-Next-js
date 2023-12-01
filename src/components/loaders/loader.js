import './loader.css'
import Image from 'next/image'

export default function Loader(){
	return(
        <div className='loader_box'>
            <span className="loader"> <div className='p-4 loader-img'><Image src="/image/logo.png" width="60" height="50" alt='logo' /></div> </span>
        </div>
    )}
