import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.Flex({
    components: [
      { Component: Component.PageTitle(), grow: true },
      { Component: Component.Darkmode() },
      { Component: Component.DesktopOnly(Component.ReaderMode()) },
      ],
    }),
    Component.MobileOnly(Component.Spacer()),
    Component.TableOfContents(),
    //Component.Explorer(), //commented out bc not necessary
    //Component.DesktopOnly(Component.TableOfContents()), //added here from right pane to have everything together on one side
  ],
  right: [
    Component.DesktopOnly(Component.MusicPlayer()),
    //Component.Graph(), //commented out in order to hide the graph view from the right pane
    //Component.DesktopOnly(Component.TableOfContents()), //commented out to hide
    //Component.Backlinks(), //commented out in order to hide
  ], 
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
