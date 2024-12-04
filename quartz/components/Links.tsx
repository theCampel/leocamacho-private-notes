import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/links.scss"
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
        <h3>Get Around</h3>
        <ul>
          <li>
            <h3 style={{marginTop: 0, marginBottom: 0}}><a href="/EdinburghAI">🧠 EdinburghAI</a></h3>
            <i>AI Society I co-founded and am current president</i>
          </li>
          <li>
            <h3 style={{marginTop: 0, marginBottom: 0}}><a href="/Personal-Projects">🛠️ Projects</a></h3>
            <i>Side projects I've worked on</i>
          </li>
          <li>
            <h3 style={{marginTop: 0, marginBottom: 0}}><a href="/Essays">📝 Essays</a></h3>
            <i>Thoughts on AI, startups, and the future</i>
          </li>
          <li>
            <h3 style={{marginTop: 0, marginBottom: 0}}><a href="https://x.com/leocamacho43">🐦 Twitter</a></h3>
            <i>I post as I build. Join me on the journey.</i>
          </li>
        </ul>
      </div>
    )
  }

  Links.css = style
  return Links
}) satisfies QuartzComponentConstructor
