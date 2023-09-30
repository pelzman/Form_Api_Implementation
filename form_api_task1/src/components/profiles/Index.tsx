
import { useState } from 'react';
import { Space, Switch } from 'antd';
export const ProfileTable = () => {
    const [disabled, setDisabled] = useState(false);

    return (
        <table className="min-w-full">
            <thead>
       
            </thead>
            <tbody>
                <tr className="border-b border-gray-300">
                    <td className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold font-[Poppins] text-[#000] text-[20px]">Education</td>
                    <td className="px-6 py-3 text-center space-x-3">
                        <input type="checkbox" />
                        <span className='font-[Poppins]'>Mandatory</span>
                    </td>
                    <td className="px-6 py-3 text-center">
                        <Space direction="horizontal" onClick={() => setDisabled(!disabled)}>
                            <Switch />
                            {!disabled ? <span className='font-[Poppins]'>Hide</span> : <span className='font-[Poppins]'>Show</span>}
                        </Space>
                    </td>
                </tr>
                {/* Add more rows as needed */}
                <tr className="border-b border-gray-300">
                    <td className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold font-[Poppins] text-[#000] text-[20px]">Experience</td>
                    <td className="px-6 py-3 text-center space-x-3">
                        <input type="checkbox" />
                        <span className='font-[Poppins]'>Mandatory</span>
                    </td>
                    <td className="px-6 py-3 text-center">
                        <Space direction="horizontal" onClick={() => setDisabled(!disabled)}>
                            <Switch />
                            {!disabled ? <span className='font-[Poppins]'>Hide</span> : <span className='font-[Poppins]'>Show</span>}
                        </Space>
                    </td>
                </tr>
                <tr className="border-b border-gray-300">
                    <td className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold font-[Poppins] text-[#000] text-[20px]">Resume</td>
                    <td className="px-6 py-3 text-center space-x-3">
                        <input type="checkbox" />
                        <span className='font-[Poppins]'> Mandatory</span>
                    </td>
                    <td className="px-6 py-3 text-center">
                        <Space direction="horizontal" onClick={() => setDisabled(!disabled)}>
                            <Switch />
                            {!disabled ? <span className='font-[Poppins]'>Hide</span> : <span className='font-[Poppins]'>Show</span>}
                        </Space>
                    </td>
                </tr>

            </tbody>
        </table>
    )
}