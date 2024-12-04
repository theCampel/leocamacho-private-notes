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
            <i>Co-founder and President of my University's AI Society</i>
          </li>
          <li>
            <h3 style={{marginTop: 0, marginBottom: 0}}><a href="/Personal-Projects">🛠️ Projects</a></h3>
            <i>Side projects I've worked on</i>
          </li>
          <li>
            <h3 style={{marginTop: 0, marginBottom: 0}}><a href="/Essays">📝 Essays</a></h3>
            <i>Thoughts on AI, startups, and the future</i>
          </li>
        </ul>
      </div>
    )
  }

  Links.css = style
  return Links
}) satisfies QuartzComponentConstructor
