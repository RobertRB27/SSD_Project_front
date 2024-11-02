 
interface TitleProps {
    title: string;
}

 export default function Title({title}: TitleProps) {
    return(
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight ">
        {title}
    </h2>
    )
 }
