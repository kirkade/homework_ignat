import s from './Loader.module.css'
import spinner from './6-dots-rotate.svg'

export const Loader = () => <div className={s.loader}>
    <img src={spinner} alt="spinner" style={{width:'60px'}}/>
</div>


