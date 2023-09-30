
import { useState } from 'react';
import { Space, Switch } from 'antd';
export const Table = () => {
    const [disabled, setDisabled] = useState(false);
  
    return (
        <table className="min-w-full">
            <thead>
                <tr className="">
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold font-[Poppins] text-[#000] text-[20px]">Phone <span className='font-normal text-base font-[Poppins]'>(without dial code)</span></th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-center font-normal space-x-4"> <input type="checkbox" />
                        <span className='font-[Poppins]'>Internal</span></th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-center font-normal">
                        <Space direction="horizontal" onClick={() => setDisabled(!disabled)}>
                            <Switch />
                            {!disabled ? <span className='font-[Poppins]'>Hide</span> : <span className='font-[Poppins]'>Show</span>}
                        </Space>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-300">
                    <td className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold font-[Poppins] text-[#000] text-[20px]">Nationality</td>
                    <td className="px-6 py-3 text-center space-x-3">
                        <input type="checkbox" />
                        <span className='font-[Poppins]'>Internal</span>
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
                    <td className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold font-[Poppins] text-[#000] text-[20px]">Current Residence</td>
                    <td className="px-6 py-3 text-center space-x-3">
                        <input type="checkbox" />
                        <span className='font-[Poppins]'>Internal</span>
                    </td>
                    <td className="px-6 py-3 text-center">
                        <Space direction="horizontal" onClick={() => setDisabled(!disabled)}>
                            <Switch />
                            {!disabled ? <span className='font-[Poppins]'>Hide</span> : <span className='font-[Poppins]'>Show</span>}
                        </Space>
                    </td>
                </tr>
                <tr className="border-b border-gray-300">
                    <td className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold font-[Poppins] text-[#000] text-[20px]">ID Number</td>
                    <td className="px-6 py-3 text-center space-x-3">
                        <input type="checkbox" />
                        <span className='font-[Poppins]'> Internal</span>
                    </td>
                    <td className="px-6 py-3 text-center">
                        <Space direction="horizontal" onClick={() => setDisabled(!disabled)}>
                            <Switch />
                            {!disabled ? <span className='font-[Poppins]'>Hide</span> : <span className='font-[Poppins]'>Show</span>}
                        </Space>
                    </td>
                </tr>
                <tr className="border-b border-gray-300">
                    <td className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold font-[Poppins] text-[#000] text-[20px]">Date of Birth</td>
                    <td className="px-6 py-3 text-center space-x-3">
                        <input type="checkbox" />
                        <span className='font-[Poppins]'>Internal</span>
                    </td>
                    <td className="px-6 py-3 text-center">
                        <Space direction="horizontal" onClick={() => setDisabled(!disabled)}>
                            <Switch />
                            {!disabled ? <span className='font-[Poppins]'>Hide</span> : <span className='font-[Poppins]'>Show</span>}
                        </Space>
                    </td>
                </tr>
                <tr className=" border-gray-300">
                    <td className="px-6 py-3 text-left font-semibold font-[Poppins] text-[#000] text-[20px]">Gender</td>
                    <td className="px-6 py-3 text-center space-x-3">
                        <input type="checkbox" />
                        <span className='font-[Poppins]'>Internal</span>
                    </td>
                    <td className="px-6 py-3 text-center space-x-3">
                        <Space direction="horizontal" onClick={() => setDisabled(!disabled)}>
                            <Switch />
                            {!disabled ? <span className='font-[Poppins]'> Hide</span> : <span className='font-[Poppins]'>Show</span>}
                        </Space>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

