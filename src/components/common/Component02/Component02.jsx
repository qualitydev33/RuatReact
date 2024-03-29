import { useEffect, useState } from 'react'
import {
    FaCaretDown,
    FaCaretUp,
    BsInfo,
    BsFillShareFill
} from '../../icon/IconImage'
import DynamicLineChart from '../DynamicLineChart'

function debounce(fn, ms) {
    let timer
    return () => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}
  

const Component02 = () => {
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })
    useEffect(() => {
        let gauge_chart = window.echarts.init(document.getElementById('gauge_chart'))
        let gauge_value = 50
        let option = {
            xAxis: {
                show: false,
                type: 'category',
                data: ['Mon'],
            },
            yAxis: {
                show: false,
                type: 'value',
            },
            series: [
                {
                    type: 'gauge',
                    radius: '100%',
                    center: ['50%', '70%'],
                    min: 0,
                    max: 100,
                    splitNumber: 100,
                    startAngle: 195,
                    endAngle: -15,
                    zlevel: 0,
                    data: [
                        {
                            value: gauge_value,
                            itemStyle: {
                                color: '#A7A7A7',
                            },
                            title: {
                                show: false
                            },
                            detail: {
                                show: false,
                            }
                        },
                    ],
                    pointer: {
                        show: true,
                        length: '100%',
                        radius: '100%',
                        width: 3,
                    },
                    title: {
                        show: false,
                    },
                    markLine: {
                        precision: 2,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: true,
                        formatter: function (value) {
                            if (value === gauge_value) {
                                return value
                            } else {
                                return ''
                            }
                        },
                        fontSize: 10,
                        distance: -40,
                        color: '#fff',
                        borderRadius: 9,
                        backgroundColor: '#BCCF4A',
                        padding: [3, 3, 3, 3],
                        rich: {}
                    },
                    axisLine: {
                        roundCap: true,
                        lineStyle: {
                            width: 13,
                            color: [
                                [1, new window.echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: "#D97458"
                                    },
                                    {
                                        offset: 0.1,
                                        color: "#DF8B58"
                                    },
                                    {
                                        offset: 0.5,
                                        color: "#F4DA5A"
                                    },
                                    {
                                        offset: 0.9,
                                        color: "#91C83F"
                                    },
                                    {
                                        offset: 1,
                                        color: "#50BC2E"
                                    }
                                ])]
                            ]
                        },
                    },
                },
                {
                    name: '小圆形',
                    type: 'pie',
                    hoverAnimation: false,
                    legendHoverLink: false,
                    center: ['50%', '70%'],
                    zlevel: 0,
                    radius: ['0%', '13%'],
                    tooltip: {
                        show: false,
                    },
                    animation: false,
                    z: 10,
                    label: {
                        show: true,
                        position: 'center',
                        color: '#fff',
                        fontSize: 10,
                        formatter: function () {
                            return '₿'
                        }
                    },

                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    data: [
                        {
                            value: 100,
                            name: '2',
                            itemStyle: {
                                normal: {
                                    color: '#A7A7A7',
                                },
                            },
                        },
                    ],
                },
            ],
        };
        gauge_chart.setOption(option)

        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
            gauge_chart.resize()
        }, 1000)

        window.addEventListener('resize', debouncedHandleResize)
        return () => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    }, [])
    return (
        <>
            <div className="relative py-6 w-full rounded-md
                            bg-white text-black dark:bg-gray-900 dark:text-white
                            shadow-card dark:shadow-dark_card">
                <div className="absolute top-0 left-0 w-full flex flex-col">
                    <div className="w-24 mx-auto -mt-3 text-xs leading-normal h-6 rounded-md flex items-center justify-center font-semibold
                                    bg-white dark:bg-dark_0fc9f2
                                    text-c_1564C0 dark:text-white
                                    shadow-card dark:shadow-dark_card">HightLights</div>
                </div>
                <div className="items-center flex-1 w-full
                                block xl:flex
                                divide-x-0 xl:divide-x-2
                                divide-c_E8EBF1 dark:divide-dark_0fc9f2">
                    <div className="grid gap-y-4
                                    px-3 xl:px-5
                                    gap-x-2 sm:gap-x-4 xl:gap-x-8
                                    grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4
                                    w-full xl:w-8/12">
                        <div className="aspect-w-1 aspect-h-1
                                        min-w-0 xl:min-w-136px">
                            <div className="rounded-lg flex flex-col text-center
                                            bg-white dark:bg-gray-900
                                            shadow-card dark:shadow-dark_card
                                            py-2 sm:py-4">
                                <div className="font-medium text-c_6E7582
                                                text-8px xl:text-sm">Total M.Cap</div>
                                <div className="font-bold mt-1
                                                text-10px xl:text-lg">$2.59T</div>
                                <div className="flex items-center mx-auto mt-1">
                                    <FaCaretDown className="text-c_C85151" />
                                    <div className="text-c_C85151 font-semibold ml-1
                                                    text-9px xl:text-sm">1.2%</div>
                                </div>
                                <DynamicLineChart className='w-full flex-1' line_color="#C85151" />
                            </div>
                        </div>

                        <div className="aspect-w-1 aspect-h-1">
                            <div className="rounded-lg flex flex-col text-center
                                            bg-white dark:bg-gray-900
                                            shadow-card dark:shadow-dark_card
                                            py-2 sm:py-4">
                                <div className="font-medium text-c_6E7582
                                                text-8px xl:text-sm">24h Vol</div>
                                <div className="font-bold mt-1
                                                text-10px xl:text-lg">$128B</div>
                                <div className="flex items-center mx-auto mt-1 text-c_64A879">
                                    <FaCaretUp className="text-c_64A879" />
                                    <div className="font-semibold ml-1
                                                    text-9px xl:text-sm">1.2%</div>
                                </div>
                                <DynamicLineChart className='w-full flex-1' line_color="#64A879" />
                            </div>
                        </div>
                        
                        <div className="aspect-h-1 aspect-w-1">
                            <div className="rounded-lg flex flex-col text-center
                                            bg-white dark:bg-gray-900
                                            shadow-card dark:shadow-dark_card
                                            py-2 sm:py-4">
                                <div className="font-medium text-c_6E7582
                                                text-8px xl:text-sm">BTC.D</div>
                                <div className="font-bold mt-1
                                                text-10px xl:text-lg">45.25%</div>
                                <div className="flex items-center mx-auto mt-1 text-c_64A879">
                                    <FaCaretUp className="text-c_64A879" />
                                    <div className="font-semibold ml-1
                                                    text-9px xl:text-sm">1.2%</div>
                                </div>
                                <DynamicLineChart className='w-full flex-1' line_color="#64A879" />
                            </div>
                        </div>
                        
                        <div className="aspect-w-1 aspect-h-1">
                            <div className="rounded-lg flex flex-col text-center
                                            bg-white dark:bg-gray-900
                                            shadow-card dark:shadow-dark_card
                                            py-2 sm:py-4">
                                <div className="font-medium text-c_6E7582
                                                text-8px xl:text-sm">ETH.D</div>
                                <div className="font-bold mt-1
                                                text-10px xl:text-lg">17.25%</div>
                                <div className="flex items-center mx-auto mt-1">
                                    <FaCaretDown className="text-c_C85151" />
                                    <div className="text-c_C85151 font-semibold ml-1
                                                    text-9px xl:text-sm">1.2%</div>
                                </div>
                                <DynamicLineChart className='w-full flex-1' line_color="#C85151" />
                            </div>
                        </div>
                        
                        

                    </div>
                    <div className="flex flex-col flex-1
                                    mt-5 xl:mt-0
                                    px-3 xl:px-5">
                        <div className="items-center flex">
                            <div className="flex items-center">
                                <div className="rounded-full bg-c_E8EBF1
                                                w-4_5 sm:w-7
                                                h-4_5 sm:h-7"></div>
                                <div className="flex-1 font-semibold ml-3
                                                text-xs sm:text-sm">Fear & Greed Index</div>
                            </div>
                            <div className="flex items-center flex-1
                                            my-2 sm:my-0">
                                <div className="w-4 h-4 rounded-full text-white flex justify-center items-center cursor-pointer transform hover:scale-125 ease-out duration-700
                                                bg-c_BCC3CF dark:bg-dark_0fc9f2 ml-3">
                                    <BsInfo className="text-white" />
                                </div>
                                <div className="text-sm dark:text-dark_0fc9f2 cursor-pointer ml-auto transform hover:scale-125 ease-out duration-700">
                                    <BsFillShareFill />
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex
                                        mt-0 sm:mt-6
                                        items-center sm:items-start">
                            <div className="h-full">
                                <div id="gauge_chart" 
                                    className="h-33
                                                w-50 sm:w-50
                                                mx-auto sm:mx-0"></div>
                                <div className="flex items-center justify-center text-xs">
                                    <div className="font-semibold">Now:</div>
                                    <div className="text-c_BCCF4A font-semibold ml-1">Greed</div>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 h-full">
                                <div>
                                    <div className="text-c_6E7582 font-semibold leading-normal
                                                    text-7px sm:text-xs">Yesterday</div>
                                    <div className="flex items-center text-c_50BC2E font-semibold
                                                    text-9px sm:text-sm">
                                        <div>Ext.Greed</div>
                                        <div className="ml-4 sm:ml-auto">70%</div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="text-c_6E7582 font-semibold leading-normal
                                                    text-7px sm:text-xs">Last week</div>
                                    <div className="flex items-center text-c_50BC2E font-semibold
                                                    text-9px sm:text-sm">
                                        <div>Ext.Greed</div>
                                        <div className="ml-4 sm:ml-auto">78%</div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="text-c_6E7582 font-semibold leading-normal
                                                    text-7px sm:text-xs">Last month</div>
                                    <div className="flex items-center text-c_E4BE64 font-semibold
                                                    text-9px sm:text-sm">
                                        <div>Neutral</div>
                                        <div className="ml-4 sm:ml-auto">53%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Component02