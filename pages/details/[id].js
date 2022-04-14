import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Details from "../../components/Details/Details";

export default function Index() {
    const router = useRouter()
    const { id } = router.query;

    return (

        <Details courseId={id} />

    )
}
