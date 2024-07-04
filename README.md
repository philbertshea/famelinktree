### Introduction
This is a Next.js (tailwind css) powered link page with editable link buttons and headers, integrated with Botpress Chatbot.
The project is automatically deployed to Vercel at https://fameplatform.vercel.app upon each git commit.

### Setting up the Project
1. Clone the project. 
Open terminal and run `git clone https://github.com/philbertshea/famelinktree.git`

2. Make your edits. 
The main file to edit is `data.json`, which houses the main content of this webpage.
- In `data.json`, name, avatar and description are text fields that can be edited.
- To edit links and buttons, scroll to the corresponding link within the links block, and change the title, url or image correspondingly.
- To add a new image, drag and drop the image from file explorer to the `public/res` folder, where all images are stored. Use a short
image name that is easy to remember. Assume the image name is `image.png`. Then, in `data.json`, in the `links` block, change the `image` 
field value to `image: 'res/image.png'`. Remember the `res/` in front of the image file name.

3. Test out the page. 
In the terminal, run `npm run dev`. Then open https://localhost:3000 in your browser to preview the page.

4. Git push and Deploy your updated page.
In the terminal, run:
`git add .`
`git commit -m "message"`
`git push`
This pushes your changes to the remote git repository. After some time, Vercel will detect the changes and re-deploy the website.

### Information about Poems Smartpark API

This linktree accesses a railway-deployed app that returns a JSON response to the latest Smartpark rates.

### Information from Next.js and Vercel

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
