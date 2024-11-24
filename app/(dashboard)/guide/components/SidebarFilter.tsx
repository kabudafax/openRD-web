import { DiseaseType } from './guide'

interface SidebarFilterProps {
  selectedDisease: DiseaseType | null
  onDiseaseChange: (disease: DiseaseType | null) => void
}

const diseases = [
  { id: 'FSHD', name: 'FSHD' },
  { id: 'CROHN', name: '克罗恩病' },
]

const SidebarFilter = ({ selectedDisease, onDiseaseChange }: SidebarFilterProps) => {
  return (
    <div className=" pr-4 ">
      <h3 className="text-xl font-semibold mb-4">选择您关注的罕见病症</h3>
      <div className="space-y-2">
        {diseases.map((disease) => (
          <div
            key={disease.id}
            className={`text-xl cursor-pointer p-2 rounded-md transition-colors ${
              selectedDisease === disease.id ? 'bg-brand-100 text-brand-500' : 'hover:bg-gray-100'
            }`}
            onClick={() => onDiseaseChange(disease.id as DiseaseType)}
          >
            {disease.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SidebarFilter
