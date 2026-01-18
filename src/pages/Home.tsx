import { PageRenderer } from '../ui/primitives/PageRenderer'
import { WebGLBackdrop } from '../ui/components/WebGLBackdrop'
import { homeConfig } from '../config/homeConfig'

export default function Home() {
  return (
    <>
      <WebGLBackdrop />
      <PageRenderer config={homeConfig} />
    </>
  )
}
