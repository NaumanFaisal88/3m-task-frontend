import { useRouter } from 'next/router'
import { redirect } from 'next/navigation';

export async function getServerSideProps(context) {
    const { projectId } = context.query
    // if (projectId == 123) {
    //     return {
    //         props: {}
    //     }
    // } else {
    //     return {
    //         redirect: {
    //             destination: '/signin'
    //         }
    //     }
    // }
    return {
        props: {
            projectId
        }
    }
    console.log('Project ID ', context.query.projectId)
}

export default function ProjectView({ projectId }) {

    console.log('Project Id', projectId)
    return (<div>Project View</div>)
}


