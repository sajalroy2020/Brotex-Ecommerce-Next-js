'use client'
import React, { useEffect, useState } from "react";
import { homepageVideo } from "../../../servises/action/all";

export default function HomeVideo() {

    const [sectiononeText, setSectiononeText] = useState({});
    const [video, setVideo] = useState({});

    function getStorage(key) {
        JSON.parse(localStorage.getItem(key));
    }
    function setStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const getVideo = async () => {
        try {
            const { data } = await homepageVideo();
            setVideo(data.setting);
            setStorage('video', data.setting);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (getStorage('video') == null) {
            getVideo();
        } else {
            setSectiononeText(getStorage('video'));
            getVideo();
        }
    }, []);

    return (
        <>
            <div className="relative service_video h-auto md:h-[650px] overflow-auto">
                <div dangerouslySetInnerHTML={{ __html: video.value }} />
            </div>
        </>
    )
}
