export default function Rank({rank}) {

    if (rank === "MVP_PLUS") {
        return(
            <h1 className="text-3xl font-pixel2 text-blue-600">MVP+</h1>
        )
    }
    if (rank === "MVP") {
        return (
        <h1 className="text-3xl font-pixel2 text-blue-600">MVP</h1>
        )
    }
    if (rank === "VIP_PLUS") {
        return (
            <h1 className="text-3xl font-pixel2 text-green-500">VIP+</h1>

        )
    }
    if (rank === "VIP") {
        return (
            <h1 className="text-3xl font-pixel2 text-green">VIP</h1>
        )
    } else {
        <h1></h1>
    }

}