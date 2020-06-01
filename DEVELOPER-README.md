# Getting Started with DreamFactory

"Getting Started with DreamFactory" is an online guide to all things DreamFactory. It's built using [VuePress](https://vuepress.vuejs.org/) and hosted on [Netlify](https://www.netlify.com/) at [https://guide.dreamfactory.com](https://guide.dreamfactory.com).

## Getting Started

To contribute, clone the repository:

https://github.com/dreamfactorysoftware/dreamfactory-book

Open a terminal, navigate to the root directory and install the dependencies:

    $ npm install

Next, run this command to display the book in your browser:

    $ vuepress dev

### Adding Images

Images are managed in the `.vuepress/public/images` directory. Keep in mind some operating systems including macOS will automatically hide directories prefixed with a dot. You can force macOS to display them with the hotkey Command + Shift + period.

We've found Markdown to be a bit weird about image placement so we use HTML. Here is an example:

    <img src="/images/performance/load-balanced-diagram.png">