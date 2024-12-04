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
  function ContactMe({ displayClass, cfg }: QuartzComponentProps) {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    return (
      
      <div class={`contactMe ${displayClass ?? ""}`}>
        <h3>Contact Me</h3>
        <ul>
          <li>
            <h3 style={{marginTop: 0, marginBottom: 0}}><a href="www.linkedin.com/in/leo-camacho">💼 Message me on LinkedIn</a></h3>
            <i>Let's connect and explore opportunities</i>
          </li>
          <li>
            <h3 style={{marginTop: 0, marginBottom: 0}}><a href="https://x.com/leocamacho43">🐦 Message me on Twitter</a></h3>
            <i>Join me on the journey</i>
          </li>
          <li>
            <h3 style={{marginTop: 0, marginBottom: 0}}><a href="https://gchq.github.io/CyberChef/#recipe=From_Hex('Auto')&input=NkM2NTZGNjM2MTZENjE2MzY4NkYzNzMwMzc0MDY3NkQ2MTY5NkMyRTYzNkY2RA">📧 Email me</a></h3>
            <i>Let's chat about my projects</i>
          </li>
        </ul>
      </div>
    )
  }

  ContactMe.css = style
  return ContactMe
}) satisfies QuartzComponentConstructor
