import Component07 from '../components/common/Component07/Component07'
import Component05 from '../components/common/Component05/Component05'
import Component06 from '../components/common/Component06/Component06'
import Component02 from '../components/common/Component02/Component02'
import Component03 from '../components/common/Component03/Component03'
import Component08 from '../components/common/Component08/Component08'
import Component04 from '../components/common/Component04/Component04'

const Task1 = () => {
    
    return (
        <div className="">
            <div className="mt-15
                            px-4 sm:px-6">
                <div className="text-3xl font-bold text-black dark:text-white">Component 2</div>
                <div className="mt-12">
                    <Component02 />
                </div>
            </div>

            <div className="mt-15
                            px-4 sm:px-6">
                <div className="text-3xl font-bold text-black dark:text-white">Component 3</div>
                <div className="mt-7">
                    <Component03 />
                </div>
            </div>

            <div className="mt-15
                            px-4 sm:px-6">
                <div className="text-3xl font-bold text-black dark:text-white">Component 4</div>
                <div className="mt-7">
                    <Component04 />
                </div>
            </div>


            <div className="mt-15
                            px-4 sm:px-6">
                <div className="text-3xl font-bold text-black dark:text-white">Component 5</div>
                <div className="mt-7">
                    <Component05 />
                </div>
            </div>

            <div className="mt-15
                            px-4 sm:px-6">
                <div className="text-3xl font-bold text-black dark:text-white">Component 6</div>
                <div className="mt-7">
                    <Component06 />
                </div>
            </div>

            
            
            <div className="mt-15
                            px-4 sm:px-6">
                <div className="text-3xl font-bold text-black dark:text-white">Component 7</div>
                <div className="mt-7">
                    <Component07 />
                </div>
            </div>


            <div className="mt-15
                            px-4 sm:px-6">
                <div className="text-3xl font-bold text-black dark:text-white">Component 8</div>
                <div className="">
                    <Component08 />
                </div>
            </div>
        </div>
        
    )
}

export default Task1