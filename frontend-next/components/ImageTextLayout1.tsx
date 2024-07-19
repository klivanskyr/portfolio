import { Image } from "@mantine/core";

export default function ImageTextLayout1({ imageUrl, rows }: { imageUrl:string, rows: JSX.Element[] }): JSX.Element {
    return (
        <div className='my-16 flex flex-row w-full justify-evenly items-center'>
                <Image className='rounded-lg min-h-52 min-w-52' src={imageUrl} alt='profile' fallbackSrc="https://placehold.co/600x400?text=Placeholder" width={100} height={100} />
                <div className='flex flex-col font-light text-lg'>
                    {rows}
                </div>
            </div>
    )
}