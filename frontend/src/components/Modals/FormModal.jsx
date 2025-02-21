/* eslint-disable react/prop-types */
import { useState } from "react"; 
import { CgClose } from "react-icons/cg";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Label from "@/components/ui/Label";
import ImageUpload from "@/components/ui/ImageUpload";
import Dropdown from "@/components/ui/Dropdown";

const FormModal = ({ onClose, label, header, action, formData, setFormData, fields, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed z-50 w-full h-full inset-0 flex items-center justify-center bg-contentLight dark:bg-customDark ${header ? "!bg-opacity-80 !dark:bg-opacity-80" : "!bg-opacity-10 !dark:bg-opacity-10"}`}>
      <div className="relative p-4 w-full max-w-lg max-h-full">
        <div className="relative bg-customLight dark:bg-customDark rounded-md shadow-[0px_0px_6px_0px] shadow-gray-200 dark:shadow-borderGrayDark">
          <div className="flex items-center justify-between p-4 md:p-5 border-b dark:border-borderDark border-contentLight">
            <h3 className="text-xl font-semibold">{action} {label?.slice(0, -1)}</h3>
            <button onClick={onClose} type="button" className="hover:bg-bgLight hover:dark:bg-bgDark hover:text-purpleLight rounded-md w-8 h-8 inline-flex justify-center items-center">
              <CgClose size={20} />
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4 max-h-[80vh] scrollbar overflow-y-auto">
            {fields.map(({ label, key, type, options }) => (
              <div key={key} className="mb-4 flex flex-col">
                <Label label={label} />
                {(type === "text" || type === "number" || type === "email" || type === "date") && 
                  <Input type={type} name={key} placeholder={`Enter ${label}`} value={formData[key] || ""} onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} required />
                }
                {type === "genre" &&
                  <div className="flex justify-center space-x-6">
                    <label className="flex items-center cursor-pointer">
                      <input type="radio" value="Male" checked={formData.genre === "Male"} onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} name="genre" className="hidden" />
                      <div className="w-4 h-4 border-2 border-gray-300 dark:border-purpleLight rounded-full flex items-center justify-center">
                        {formData.genre === "Male" && ( <div className="w-2 h-2 bg-gray-300 dark:bg-purpleLight rounded-full"></div> )}
                      </div>
                      <span className="ml-2 text-gray-700 dark:text-grayDark">Male</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="radio" value="Female" checked={formData.genre === "Female"} onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} name="genre" className="hidden" />
                      <div className="w-4 h-4 border-2 border-gray-300 dark:border-purpleLight rounded-full flex items-center justify-center">
                        {formData.genre === "Female" && ( <div className="w-2 h-2 bg-gray-300 dark:bg-purpleLight rounded-full"></div> )}
                      </div>
                      <span className="ml-2 text-gray-700 dark:text-grayDark">Female</span>
                    </label>
                  </div>
                }
                {type === "textarea" &&
                  <Textarea type={type} name={key} placeholder={`Enter ${label}`} value={formData[key] || ""} onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} />
                }
                {type === "image" &&
                  <ImageUpload name={key} value={formData[key] || ""} onChange={(fileName) => setFormData({ ...formData, [key]: fileName })} />
                }
                {type === "dropdown" && options &&
                  <Dropdown
                    label={label}
                    name={key}
                    options={options}
                    selectedValue={formData[key] || ""}
                    onSelect={(selected) => { console.log(selected.value); setFormData({ ...formData, [key]: selected.value }); setIsOpen(!isOpen);}}
                    isOpen={isOpen}
                    toggleOpen={() => setIsOpen(!isOpen)}
                  />
                }
              </div>
            ))}
          </div>
          <div className="flex items-center p-4 md:p-5 rounded-b dark:border-gray-600 justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="border border-purpleLight text-purpleLight text-[14px] py-2 px-6 rounded-md"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={onSubmit}
              className="bg-purpleLight dark:bg-purpleDark text-white dark:text-purpleLight text-[14px] py-2 px-6 rounded-md"
            >
              {action}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
