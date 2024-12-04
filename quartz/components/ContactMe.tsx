import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/contactMe.scss"
import { GlobalConfiguration } from "../cfg"

interface Options {
  title: string
}

const defaultOptions = (cfg: GlobalConfiguration): Options => ({
  title: "",
})

export default ((userOpts?: Partial<Options>) => {
  function Links({ displayClass, cfg }: QuartzComponentProps) {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    return (
      
      <div class={`links ${displayClass ?? ""}`}>
        <h3>Contact Me</h3>
        <ul>
          <li>
            <h5 style={{marginTop: 0, marginBottom: 0}}><a href="https://www.linkedin.com/in/leo-camacho">💼 LinkedIn</a></h5>
          </li>
          <li>
            <h5 style={{marginTop: 0, marginBottom: 0}}><a href="https://x.com/leocamacho43">🐦 Twitter</a></h5>
          </li>
          <li>
            <h5 style={{marginTop: 0, marginBottom: 0}}><a href="https://gchq.github.io/CyberChef/#recipe=From_Hex('Auto')&input=NkM2NTZGNjM2MTZENjE2MzY4NkYzNzMwMzc0MDY3NkQ2MTY5NkMyRTYzNkY2RA">📧 Email</a></h5>
          </li>
        </ul>
      </div>
    )
  }

  Links.css = style
  return Links
}) satisfies QuartzComponentConstructor
