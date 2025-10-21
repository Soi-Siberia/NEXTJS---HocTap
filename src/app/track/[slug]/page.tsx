'use client';

import { useSearchParams } from "next/navigation";
import { use } from "react";


const DetailTrackPage = (props: any) => {
    // const router = useRouter()
    console.log('DetailTrackPage props:', props);
    const searchParams = useSearchParams();
    const search = searchParams.get('audio');
    console.log('Search param audio:', search);

    return (
        <p>DetailTrackPage</p>
    )
}

export default DetailTrackPage;