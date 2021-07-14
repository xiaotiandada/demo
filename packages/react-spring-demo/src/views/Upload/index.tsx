import React, { useEffect } from 'react'
import { Upload, message, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const UploadPage: React.FC = () => {
  const props: any = {
    name: 'file',
    action: 'https://mttk-nft-api.mttk.net/storage/uploadToIpfs',
    method: 'PUT',
    data: {
      name: Date.now(),
      description: Date.now(),
    },
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
  }

  return (
    <div id="pixi">
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
  )
}

export default UploadPage
