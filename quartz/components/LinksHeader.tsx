import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div>
        <div id="links-header">
          <span>

            <a href="/EdinburghAI">🧠 EdinburghAI</a>
          </span>
          <span>
            <a href="/Personal-Projects">🛠️ Projects</a>
          </span>
          <span>
            <a href="/Essays">📝 Essays</a>
          </span>
          <span>
            <a href="https://x.com/leocamacho43">🐦 Twitter</a>
          </span>
        </div>
      <hr style="background-color: var(--lightgray); border-top: 1px var(--lightgray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
