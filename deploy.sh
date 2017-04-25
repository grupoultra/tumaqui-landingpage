bucket="s3://buy.tumaqui.com"
# gulp build

aws s3 cp ./dist $bucket \
    --region us-east-1 \
    --recursive --acl public-read
