import s from "./styles.module.css"
import CSS from 'csstype'

const Loading = (props: {width:string, height: string, font_size: string,}) => {
    const sizeStyles: CSS.Properties = {
        width: props.width,
        height: props.height,
        fontSize: props.font_size
    }

    return(<div style={sizeStyles} className={s.loading_wrapper}>
            <div className={s.loading} >
                <div className={s.loading_inner}>
                    <div className={s.loading_inner_items}></div>
                    <div className={s.loading_inner_items}></div>
                    <div className={s.loading_inner_items}></div>
                </div>

            </div>
            <div className={s.loading_text}>Loading...</div>
        </div>
    )
}

export default Loading