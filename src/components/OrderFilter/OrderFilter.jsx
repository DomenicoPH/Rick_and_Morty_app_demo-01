import style from './OrderFilter.module.css'
import { filterCards, orderCards } from "../../redux/actions"
import { useState } from "react"
import { useDispatch } from 'react-redux'

const OrderFilter = (props) => {

    const [refresh, setRefresh] = useState(false)

    const dispatch = useDispatch()

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setRefresh(!refresh)
    }
    
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    const favoritesCount = props.filtered.length;

    return(
        <div className={style.container}>
            <div className={style.filterAndOrderContainer}>
                
                <div className={style.orderContainer}>
                    <select className={style.select} onChange={handleOrder}>
                        <option value="U">Unordered</option>
                        <option value="A">Ascending</option>
                        <option value="D">Descending</option>
                    </select>
                </div>
    
                <div className={style.count}>{favoritesCount}</div>
    
                <div className={style.filterContainer}>
                    <select className={style.select} onChange={handleFilter}>
                        <option value="All">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
    
            </div>
        </div>
    )
}

export default OrderFilter;