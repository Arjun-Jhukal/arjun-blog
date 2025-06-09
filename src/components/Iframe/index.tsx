import { IframeRecordType } from '@/interface'
import { renderHtml } from '@/utils/renderHTML/renderHTML'
import React from 'react'

export default function YoutubeIframe({ data }: { data: IframeRecordType }) {
    return (
        <div dangerouslySetInnerHTML={renderHtml(data.iframe)} className='my-8' />
    )
}
