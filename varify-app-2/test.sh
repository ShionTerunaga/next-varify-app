values=(
    "./src/app/**/page.tsx" 
    "./src/app/**/**/page.tsx"
)

code="export type pathType={path:string,pageName:string}\n\n export const data:pathType[]=["

for value in ${values[@]};do
    test=`dirname $value | sed -e 's/.\/src\/app\//\//g'`
    name=`dirname $value | sed -e 's/.\/src\/app\///g' | sed -e 's/\([a-zA-Z0-9]\)*\///g'`
    text="Go to $name" 
    code+="{path:'$test',pageName:'$text'},"
    
done

code+="]"

mkdir ./src/data
touch ./src/data/path.ts

echo $code | sed -e 's/,]/]/g' > ./src/data/path.ts

pnpm formatter
