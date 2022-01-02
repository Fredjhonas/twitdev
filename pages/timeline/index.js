import Link from "next/link"
import AppLayout from "../../components/AppLayout"
// import styles from './Timeline.module.css'

const Timeline = ({ name }) => {
    return (
        <AppLayout title={"Timeline"} name={"Timeline"} content={"Timeline de twits recientes"}>
            <Link href="/">Home</Link>
            <h1 className="text-2xl">Timeline {name} </h1>
        </AppLayout>
    )
}

export default Timeline


Timeline.getInitialProps = async () => {
    return fetch('http://localhost:3000/api/hello').then(res => res.json()).then(response => {
        const { name } = response
        return { name }
    })
}