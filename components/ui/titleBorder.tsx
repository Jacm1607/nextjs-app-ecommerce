interface ITitleBorder {
    title: string
}
const TitleBorder = ({title}: ITitleBorder) => <div className="my-6 relative">
<h2 className="absolute text-4xl font-extrabold text-primary tracking-tight bg-white pr-3 uppercase">
    {title}
</h2>
<div className="border-b-2 h-8 border-primary"></div>
</div>

export default TitleBorder