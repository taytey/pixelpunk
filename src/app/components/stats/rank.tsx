export default function Rank({rank}) {

    if (rank === "MVP_PLUS") {
        return(
            <h1 className="text-3xl font-pixel2 hover:text-blue-600 text-neutral-600 transition-all duration-500 select-none">MVP+</h1>
        )
    }
    if (rank === "MVP") {
        return (
        <h1 className="text-3xl font-pixel2 hover:text-blue-600 text-neutral-600 transition-all duration-500 select-none">MVP</h1>
        )
    }
    if (rank === "VIP_PLUS") {
        return (
            <h1 className="text-3xl font-pixel2 hover:text-green-500 text-neutral-600 transition-all duration-500 select-none">VIP+</h1>

        )
    }
    if (rank === "VIP") {
        return (
            <h1 className="text-3xl font-pixel2 hover:text-green-500 text-neutral-600 transition-all duration-500 select-none">VIP</h1>
        )
    } else {
        <h1></h1>
    }

}