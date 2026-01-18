interface DataTableProps {
  headers: string[]
  rows: (string | number)[][]
  className?: string
}

export function DataTable({ headers, rows, className = '' }: DataTableProps) {
  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-white/20">
            {headers.map((header, index) => (
              <th
                key={index}
                className="text-left py-4 px-6 text-sm font-semibold uppercase tracking-wider text-gray-400"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-white/10 hover:bg-white/5 transition-colors"
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-4 px-6 text-gray-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
