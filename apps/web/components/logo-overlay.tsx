export const LogoOverlay = ({ className }: { className: string }) => {
    return <div className=" bg-[#BAFD50] absolute  text-black rounded  bottom-0 right-0 text-3xl font-striper" style={{
        width: '100px',
        height: '100px',
        clipPath: 'polygon(100% 0, 100% 100%, 0 100%)', 
    }}>
        <div className="absolute bottom-2 right-4 font-striper">rc</div>
    </div>
}