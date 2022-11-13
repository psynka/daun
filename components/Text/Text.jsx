import css from "./Text.module.css"


export const Text = ({title, children}) =>{
    return <p type = "p" className={css.p}> {children} </p>;
}